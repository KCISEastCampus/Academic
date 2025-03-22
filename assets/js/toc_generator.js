function generateTOC() {
  // 获取内容区域和目录容器
  const content = document.querySelector('.content-wrapper') || document.body;
  const toc = document.querySelector('.toc-content');

  if (!toc) return; // 如果没有找到目录容器，直接返回

  // 获取所有 h2, h3, h4 和 h5 标题
  const headings = content.querySelectorAll('h2, h3, h4, h5');

  if (headings.length === 0) return; // 如果没有找到标题，直接返回

  // 创建目录结构
  let tocHTML = '<ul class="toc-list">';
  let currentH2 = null;
  let currentH3 = null;
  let currentH4 = null;
  let inH3List = false;
  let inH4List = false;
  let inH5List = false;

  // 生成安全的ID
  function generateSafeId(text, index) {
    // 如果已经有ID，就使用现有ID
    if (text.id && text.id.trim() !== '') {
      return text.id;
    }

    // 否则生成一个基于文本内容的安全ID
    // 1. 转换为小写
    // 2. 替换空格为连字符
    // 3. 移除所有非字母数字和连字符的字符
    // 4. 添加索引确保唯一性
    let safeId = 'heading-' + index;

    // 如果想基于文本生成ID，可以使用下面的代码（但需要处理特殊字符）
    // let safeId = text.textContent.toLowerCase()
    //   .replace(/\s+/g, '-')       // 替换空格为连字符
    //   .replace(/[^\w\-]/g, '')    // 移除非字母数字字符
    //   .replace(/\-+/g, '-')       // 替换多个连字符为单个连字符
    //   .replace(/^\-+|\-+$/g, ''); // 移除开头和结尾的连字符

    // 确保ID唯一性
    if (!safeId || document.getElementById(safeId)) {
      safeId = 'heading-' + index;
    }

    return safeId;
  }

  // 遍历所有标题
  headings.forEach((heading, index) => {
    // 为每个标题生成安全的ID
    const id = generateSafeId(heading, index);
    heading.id = id;

    const headingText = heading.textContent;
    const headingTag = heading.tagName.toLowerCase();

    if (headingTag === 'h2') {
      // 关闭之前可能打开的所有列表
      if (inH5List) {
        tocHTML += '</ul></li>';
        inH5List = false;
      }
      if (inH4List) {
        tocHTML += '</ul></li>';
        inH4List = false;
      }
      if (inH3List) {
        tocHTML += '</ul></li>';
        inH3List = false;
      }

      // 添加 H2 到目录
      tocHTML += `<li><a href="#${id}" class="toc-h2">${headingText}</a>`;
      currentH2 = heading;
      currentH3 = null;
      currentH4 = null;

      // 检查下一个元素是否是 H3
      const nextHeading = headings[index + 1];
      if (nextHeading && nextHeading.tagName.toLowerCase() === 'h3') {
        tocHTML += '<ul>';
        inH3List = true;
      } else {
        tocHTML += '</li>';
      }
    } else if (headingTag === 'h3' && currentH2) {
      // 关闭之前可能打开的 H4 和 H5 列表
      if (inH5List) {
        tocHTML += '</ul></li>';
        inH5List = false;
      }
      if (inH4List) {
        tocHTML += '</ul></li>';
        inH4List = false;
      }

      // 如果不在 H3 列表中，需要开始一个新的 H3 列表
      if (!inH3List) {
        tocHTML += '<ul>';
        inH3List = true;
      }

      // 添加 H3 到目录
      tocHTML += `<li><a href="#${id}" class="toc-h3">${headingText}</a>`;
      currentH3 = heading;
      currentH4 = null;

      // 检查下一个元素是否是 H4
      const nextHeading = headings[index + 1];
      if (nextHeading && nextHeading.tagName.toLowerCase() === 'h4') {
        tocHTML += '<ul>';
        inH4List = true;
      } else {
        tocHTML += '</li>';
      }
    } else if (headingTag === 'h4' && currentH3) {
      // 关闭之前可能打开的 H5 列表
      if (inH5List) {
        tocHTML += '</ul></li>';
        inH5List = false;
      }

      // 如果不在 H4 列表中，需要开始一个新的 H4 列表
      if (!inH4List) {
        tocHTML += '<ul>';
        inH4List = true;
      }

      // 添加 H4 到目录
      tocHTML += `<li><a href="#${id}" class="toc-h4">${headingText}</a>`;
      currentH4 = heading;

      // 检查下一个元素是否是 H5
      const nextHeading = headings[index + 1];
      if (nextHeading && nextHeading.tagName.toLowerCase() === 'h5') {
        tocHTML += '<ul>';
        inH5List = true;
      } else {
        tocHTML += '</li>';
      }
    } else if (headingTag === 'h5' && currentH4) {
      // 如果不在 H5 列表中，需要开始一个新的 H5 列表
      if (!inH5List) {
        tocHTML += '<ul>';
        inH5List = true;
      }

      // 添加 H5 到目录
      tocHTML += `<li><a href="#${id}" class="toc-h5">${headingText}</a></li>`;

      // 检查是否需要关闭 H5 列表
      const nextHeading = headings[index + 1];
      if (!nextHeading || nextHeading.tagName.toLowerCase() !== 'h5') {
        tocHTML += '</ul></li>';
        inH5List = false;
      }
    }
  });

  // 关闭所有可能仍然打开的列表
  if (inH5List) tocHTML += '</ul></li>';
  if (inH4List) tocHTML += '</ul></li>';
  if (inH3List) tocHTML += '</ul></li>';
  tocHTML += '</ul>';

  // 插入目录内容
  toc.innerHTML = tocHTML;

  // 添加平滑滚动效果
  document.querySelectorAll('.toc-content a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      const targetId = this.getAttribute('href').substring(1); // 移除 # 符号
      const targetElement = document.getElementById(targetId);
      if (targetElement) {
        targetElement.scrollIntoView({
          behavior: 'smooth'
        });

        // 更新 URL 但不刷新页面
        history.pushState(null, null, '#' + targetId);
      }
    });
  });

  // 添加当前阅读位置高亮
  window.addEventListener('scroll', () => {
    let currentSection = '';
    const scrollPosition = window.scrollY;

    // 找到当前滚动位置对应的标题
    headings.forEach(heading => {
      const sectionTop = heading.offsetTop - 100; // 添加一些偏移量
      if (scrollPosition >= sectionTop) {
        currentSection = heading.id;
      }
    });

    // 高亮当前目录项
    document.querySelectorAll('.toc-content a').forEach(link => {
      link.classList.remove('active');
      if (link.getAttribute('href') === `#${currentSection}`) {
        link.classList.add('active');
      }
    });
  });
}
