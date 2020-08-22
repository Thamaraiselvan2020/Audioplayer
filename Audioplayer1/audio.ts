export  class AudioPlayer {

    playerElem : any;
    audio:any;
    currentPlay : any;
    audioElement : any;
    audioContent : any;
 

    constructor(selector = '.audioPlayer', audio :any = []) {
        this.playerElem = <HTMLDivElement>document.querySelector(selector);
        this.audio = audio;
        
        this.currentPlay = null;
        this.formPlayerElements();
        this.audioContent = null;    
    }

formPlayerElements() {
   
    this.audioElement = <HTMLAudioElement>document.createElement('audio');
    const playListElement =<HTMLDivElement> document.createElement('div');
    playListElement.classList.add('playlist');

    this.playerElem.appendChild(this.audioElement);
    this.playerElem.appendChild(playListElement);

    this.formPlayListElements(playListElement);
}

formPlayListElements(playListElement : any) {

    this.audio.forEach( (audio :any) => {
        const audioItem =<HTMLAnchorElement> document.createElement('a');
        audioItem.href = audio.link;
        audioItem.innerHTML = `<i class="fa fa-play"></i>${audio.fileName}`;
    this.eventListener(audioItem);
        playListElement.appendChild(audioItem);
    });

}
eventListener(audioItem : any) {
    audioItem.addEventListener('click', (e : any) => {
        e.preventDefault();
        if (!this.audioContent) {
           
        }
        const currentAudio = audioItem.getAttribute('href') == (this.currentPlay && this.currentPlay.getAttribute('href'));

        if ( currentAudio && !this.audioElement.paused) {
            this.Play(this.currentPlay);
            this.audioElement.pause();
        } else if ( currentAudio && this.audioElement.paused) {
            this.Pause(this.currentPlay);
            this.audioElement.play();

        } else {
            if (this.currentPlay) {
                this.Play(this.currentPlay);
            }
            this.currentPlay = audioItem;
            this.Pause(this.currentPlay);
            this.audioElement.src = this.currentPlay.getAttribute('href');
            this.audioElement.play();
        }

    })
}

Pause(element:any) {
    const icon = <HTMLElement>element.querySelector('i');
    icon.classList.add('fa-pause');
    icon.classList.remove('fa-play');
}

Play(element : any) {
    const icon = <HTMLElement>element.querySelector('i');
    icon.classList.remove('fa-pause');
    icon.classList.add('fa-play');
};

}