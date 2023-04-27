let showPointBtn = document.getElementById('showPoint')

showPointBtn.addEventListener('click', function () {
    let diemToan = document.getElementById('diemToan').value;
    let diemVan = document.getElementById('diemVan').value;
    let diemAnh = document.getElementById('diemAnh').value;
    let area = document.getElementById('area').value;
    let areaPoitn;
    switch (area) {
        case 'KV1':
            areaPoitn = 0.75;
            break;
         case 'KV2-NT':
            areaPoitn = 0.5;
            break;
         case 'KV2':
            areaPoitn = 0.25;
            break;
         case 'KV3':
            areaPoitn = 0;
            break;
        
    }
    let poitHtml = Number(diemToan) + Number(diemVan) + Number(diemAnh) + areaPoitn;
    let result = document.getElementById('result');
    result.innerHTML = `Tổng điểm là: ${poitHtml}`;

})