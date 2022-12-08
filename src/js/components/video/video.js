class Item { }

class UrlItem extends Item { 
   constructor(url, view) {
        super();
        this._videoId = url.split("/").pop();
        this._videoCode = '26883701';
        this._videoType = '';
        this._videoUrl = '';

        let urlLowerCase = url.toLowerCase();
        if (urlLowerCase == '') {
          this._videoType = "blank";
        } else if (urlLowerCase.includes("youtube") || urlLowerCase.includes("youtu.be")) {
          const youTubeV = url.split("v=");
          if (youTubeV.length > 1) {
            this._videoId = youTubeV[1];
          }
          this._videoType = "youtube";
          this._videoUrl = `https://www.youtube.com/embed/${this._videoId}`;
  
        } else if (urlLowerCase.includes("mediaspace")) {
          if (view == "vertical") {
            this._videoCode = '44666331';
          }
          this._videoType = "mediaspace";
          if (urlLowerCase.includes("embed/secure")) {
            this._videoCode = this._videoId;
            let urlArray = url.split("/");
            this._videoId = urlArray[urlArray.length - 3];
          } 
          this._videoUrl = `https://mediaspace.illinois.edu/embed/secure/iframe/entryId/${this._videoId}/uiConfId/${this._videoCode}`;
        } else if (urlLowerCase.includes("vimeo")) {
            this._videoType = "vimeo";
            this._videoUrl = `https://player.vimeo.com/video/${this._videoId}`;
        }
      }

      get videoType() {
        return this._videoType;
      }

      get videoId() {
        return this._videoId;
      }

      get videoCode() {
        return this._videoCode;
      }
      
      get videoUrl() {
        return this._videoUrl;
      }
}

module.exports = { UrlItem };