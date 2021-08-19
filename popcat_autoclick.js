setInterval(function autoClick() {
    document.dispatchEvent(new KeyboardEvent('keydown', {'key':'c'}));
},0);
