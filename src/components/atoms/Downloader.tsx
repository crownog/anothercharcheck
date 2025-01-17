import { Button } from 'antd'
import React from 'react'
import domtoimage from 'dom-to-image';
import html2canvas from 'html2canvas';
import { isIOS, isIOS13, isMacOs, isSafari } from 'react-device-detect';

const Downloader: React.FC<DownloadProps> = ({ tag, text="Download", height=35, width=110 }) => {

    const handleSaveClick = () => {
        const element = document.getElementById(tag)
        if (!element) return;
        if ( isIOS || isIOS13 || isSafari || isMacOs) {
            alert('alternative Downloader for iOS & Safari')
            html2canvas(element).then(function(canvas) {
                let a = document.createElement('a');
                a.href = canvas.toDataURL("image/jpeg").replace("image/jpeg", "image/octet-stream")
                a.download = `c${Date.now()}.png`;
                a.click();
            })
        } else {
            domtoimage.toJpeg(element, { quality: 1 })
            .then(function (dataUrl) {
               var link = document.createElement('a');
               link.download = `c${Date.now()}.png`;
               link.href = dataUrl;
               link.click();
           });
        }
    }

    return (
        <Button shape='round' style={{ height: height, width: width, fontSize: "1rem", fontWeight: 600, margin: 5}} type="primary" danger onClick={handleSaveClick}>{text}</Button>
    )
}

export default Downloader
