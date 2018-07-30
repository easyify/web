module.exports = {
  helpers: {
    if_or: function(v1, v2, options) {
      if (v1 || v2) {
        return options.fn(this);
      }

      return options.inverse(this);
    }
  },
  prompts: {
    name: {
      type: 'string',
      required: true,
      message: 'Project name'
    },
    description: {
      type: 'string',
      required: false,
      message: 'Project description',
      default: 'A easyify H5 project'
    },
    author: {
      type: 'string',
      required: false,
      message: 'Author'
    },
    multi: {
      type: 'confirm',
      message: 'Is a multi-page application?'
    },
    title: {
      type: 'string',
      message: 'home page title',
      default: 'page title'
    },
    mobile: {
      type: 'confirm',
      message: 'Use mobile adaptive?'
    },
    jQuery: {
      type: 'confirm',
      message: 'Use jQuery lib?'
    },
    analytics: {
      type: 'confirm',
      message: 'Use GA analytics?'
    }
  },
  filters: {
    filters: {
      'pages/**/*': 'multi'
    },
  },
  completeMessage:
    'You can edit your code ASAP!\n\n Enjoy your life!~~'
};
