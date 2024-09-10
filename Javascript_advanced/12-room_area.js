const roomDimensions = {
    width: 50,
    length: 100,
    getArea() {
        return this.width * this.length;
    },
};

// Function context becomes global scope
const getArea = roomDimensions.getArea;

// Context must be binded to original object
const boundGetArea = getArea.bind(roomDimensions);