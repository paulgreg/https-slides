(function () {
    var proto = Object.create(HTMLElement.prototype);

    proto.createdCallback = function() {
        var tpl = document.querySelector('#slide-progression-tpl');
        var clone = document.importNode(tpl.content, true);

        var selection = this.getAttribute('open');

        var liToShow = clone.querySelector('.'+selection);
        liToShow.classList.remove('closed');
        liToShow.classList.remove('hidden');
        liToShow.classList.add('red');

        this.appendChild(clone);
    };

    var SlidesProgression = document.registerElement('slide-progression', {
        prototype: proto
    });

})();
