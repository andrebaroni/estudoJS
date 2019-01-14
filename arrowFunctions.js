

var x = function(){
    var that = this;
    this.val = 1;
    setTimeout(function(){
        that.val++;
        console.log(this.val)
    }, 1)
};

var xx = new x();