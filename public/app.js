document.getElementById('upload').addEventListener('click', async (e) => {
    const files = document.getElementById('fileUpload').files[0];
    console.log(files);
    const data = new FormData();
    data.append('files', files);
    const res = await axios.post('http://localhost:3000/upload', data, {
        onUploadProgress: (e) => {
            document.getElementById('progressBar').value = Math.round((e.loaded / e.total) * 100);
        },
    });
});
