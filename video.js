const videoBlock = document.querySelector('.createx-video__block');
const video = videoBlock.querySelector('video');
const playBtn = videoBlock.querySelector('.createx-video__block-play');
const mutedBtn = videoBlock.querySelector('.createx-video__block-muted');
const unmutedBtn = videoBlock.querySelector('.createx-video__block-unmuted');

playBtn.addEventListener('click', () => {
    videoBlock.classList.add('createx-video__block--played');
    video.play();
    playBtn.classList.add('createx-video__block-play--played');
});


video.addEventListener('click', () => {
    videoBlock.classList.remove('createx-video__block--played');
    video.pause();
    playBtn.classList.remove('createx-video__block-play--played');
});

mutedBtn.addEventListener('click', () => {
    video.muted = true;
    mutedBtn.classList.add('createx-video__block-muted--muted');
    unmutedBtn.classList.add('createx-video__block-unmuted--unmuted');
});

unmutedBtn.addEventListener('click', () => {
    video.muted = false;
    mutedBtn.classList.remove('createx-video__block-muted--muted');
    unmutedBtn.classList.remove('createx-video__block-unmuted--unmuted');
});