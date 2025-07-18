async function getVideo() {
  const videoUrl = document.getElementById("url").value;
  const resultDiv = document.getElementById("result");
  resultDiv.innerHTML = "Mengambil video...";

  try {
    const response = await fetch(`https://open.tiktokapis.com/v2/user/data/download/=${encodeURIComponent(videoUrl)}`);
    const data = await response.json();

    if (data.data && data.data.play) {
      const directUrl = data.data.play;

      resultDiv.innerHTML = `
        <video controls autoplay src="${directUrl}"></video><br>
        <a href="${directUrl}" download>Download Video</a>
      `;
    } else {
      resultDiv.innerHTML = "Video tidak ditemukan atau URL salah.";
    }
  } catch (error) {
    resultDiv.innerHTML = "Gagal mengambil video.";
    console.error(error);
  }
        }
