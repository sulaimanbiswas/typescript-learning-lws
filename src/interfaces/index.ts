interface RectangleOptions {
  width: number;
  length: number;
}

function drowRectangle(options: RectangleOptions) {
  let width = options.width;
  let length = options.length;
}

let threeDOptions = {
  width: 30,
  length: 50,
  height: 60,
};

drowRectangle(threeDOptions);
