require('should');
var index = require('../routes/index.js');

describe('Web Page', function(){
  describe('#index', function(){
    it('should render page with title express', function(){
      index.index(undefined, {
        render: function(path, options) {
          path.should.equal('index');
          options.should.have.property('title', 'Express');
        }
      })
    })
  })
})