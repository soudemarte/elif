function acceptLove() {
    document.getElementById('question-container').style.display = 'none';
    document.getElementById('collage-container').style.display = 'block';
}

function growYesButton() {
    let yesButton = document.getElementById('yes-button');
    let currentSize = parseInt(window.getComputedStyle(yesButton).fontSize);
    yesButton.style.fontSize = (currentSize * 1.5) + 'px';
    yesButton.style.padding = (currentSize * 0.75) + 'px ' + (currentSize * 1.5) + 'px';
    
    if (currentSize > 250) { n
        document.getElementById('no-button').style.display = 'none';
    }
}

function openPhoto(photoSrc, audioSrc, noteText) {
    document.getElementById('full-photo').src = photoSrc;
    document.getElementById('photo-note').innerText = noteText;
    document.getElementById('photo-viewer').style.display = 'flex';

    let audioElement = document.getElementById('photo-audio');
    let audioSource = document.getElementById('audio-source');
    
    audioSource.src = audioSrc;  
    audioElement.load();       
    audioElement.play();    
}
function closePhoto() {
    document.getElementById('photo-viewer').style.display = 'none';
    
    let audioElement = document.getElementById('photo-audio');
    audioElement.pause();
    audioElement.currentTime = 0; 
}


