class getido {
  getInfo() {
    return {
      id: 'getido',
      name: '緯度取得',
      blocks: [
        {
          opcode: 'getido',
          blockType: Scratch.BlockType.REPORTER,
          text: '緯度取得'
        }
      ]
    };
  }

  getido() {
    const latitude = position.coords.latitude; 
    return 'latitude';
  }
}

Scratch.extensions.register(new getido());