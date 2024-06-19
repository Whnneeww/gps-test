class keido {
  getInfo() {
    return {
      id: 'getkeido',
      name: '経度取得',
      blocks: [
        {
          opcode: 'getkeido',
          blockType: Scratch.BlockType.REPORTER,
          text: '経度取得'
        }
      ]
    };
  }

  getkeido() {
    const longitude = position.coords.longitude;
    return 'longitude';
  }
}

Scratch.extensions.register(new keido());