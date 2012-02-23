EI.core.rectangle = {
    left: function() {
        return this.x;
    },

    right: function() {
        return this.x + this.width;
    },

    top: function() {
        return this.y;
    },

    bottom: function() {
        return this.y + this.height;
    },

    isIntersectingWith: function(other) {
        return !(this.left() > other.right() || this.right() < other.left() || this.top() > other.bottom() || this.bottom() < other.top());
    }
};
