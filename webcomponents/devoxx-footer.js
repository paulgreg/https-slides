(function () {
    var proto = Object.create(HTMLElement.prototype);

    proto.createdCallback = function() {
        var tpl = document.querySelector('#devoxx-footer-tpl');
        var clone = document.importNode(tpl.content, true);
        this.appendChild(clone);
    };

    var SlidesProgression = document.registerElement('devoxx-footer', {
        prototype: proto
    });

})();
