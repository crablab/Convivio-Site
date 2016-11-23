var priorityNav = require('priority-nav');

var nav = priorityNav.init({
  mainNav: 'ul.site-nav',
  navDropdownClassName: 'site-nav__dropdown',
  navDropdownToggleClassName: 'site-nav__dropdown-toggle',
  navDropdownLabel: 'More',
  navDropdownBreakpointLabel: 'Menu',
  breakPoint: 450
});
