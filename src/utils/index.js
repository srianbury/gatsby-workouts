// www.youtube.com/watch?v=4zxKKIG_1iA&id=23
function extractVideoId(url) {
  const afterV = url.split("v=")[1];
  const id = afterV.split("&")[0];
  return id;
}

export { extractVideoId };
