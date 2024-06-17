app.get('/location', (req, res) =&gt; { 
  if (navigator.geolocation) { 
    navigator.geolocation.getCurrentPosition( 
      (position) =&gt; { 
        // ユーザーの緯度と経度を取得 
        const latitude = position.coords.latitude; 
        const longitude = position.coords.longitude; 
        // ユーザーの移動速度を取得（メートル毎秒） 
        const speed = position.coords.speed; 
<pre><code>    // 取得した情報をJSON形式で返す 
    const locationData = { 
      latitude: latitude, 
      longitude: longitude, 
      speed: speed ? speed : 'Unknown', // 速度が取得できない場合は"不明"を返す 
    }; 
    res.json(locationData); 
  }, 
  (error) =&gt; { 
    // エラーが発生した場合の処理 
    res.status(500).json({ error: '位置情報取得に失敗しました' }); 
  } 
); 
