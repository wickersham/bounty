// Handlebars template for the programs list viewpage. Do Not Touch!

var response = [
      {
        school: "Bradford Tech Center"
      },
      {
        desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit."
      },
      {
        phone: "555-555-5555"
      },
      {
        location: "Gainesville, FL"
      },
      {
        moreInfo: "More info button with #myModel here"
      }
    ];

$.handlebars({
    templatePath: 'templates'
});

// var source   = $("#test").html();
// var template = Handlebars.compile(source);

// now this will fetch <path/to/templates/content.hbs>
$('#viewpage').render('viewpage', {
    employer: 'Hello',
    field2: 'world!',
    programs: response
});

// Dropdowns on viewpage; publicView.html
  function DropDown(el) {
    this.dd = el;
    this.placeholder = this.dd.children('span');
    this.opts = this.dd.find('ul.dropdown > li');
    this.val = '';
    this.index = -1;
    this.initEvents();
  }
  DropDown.prototype = {
    initEvents : function() {
      var obj = this;

      obj.dd.on('click', function(event){
        $(this).toggleClass('active');
        return false;
      });

      obj.opts.on('click',function(){
        var opt = $(this);
        obj.val = opt.text();
        obj.index = opt.index();
        obj.placeholder.text(obj.val);
      });
    },
    getValue : function() {
      return this.val;
    },
    getIndex : function() {
      return this.index;
    }
  }

  $(function() {

    var dd = new DropDown( $('#dd') );

    $(document).click(function() {
      // all dropdowns
      $('.wrapper-dropdown-3').removeClass('active');
    });

  });
