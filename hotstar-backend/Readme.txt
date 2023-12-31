1) create .env file in root directory and add your db url 
2) create assets folder and inside assets create movie , moviePoster , profiles and trailer folder 
3) do npm i and then npm start to start server 


################################# API'S TO ADD DATA ######################################

1) to add movies :

api : http://localhost:5000/api/v1/in/super-admin/add-movie
payLoad as FormData : {
movieName : string	
releaseYear : number
duration : number
ageGroup : number
description : string
genre : string 
paid : boolean
views : number
language : string[]
movie : videoFile
trailer: videoFile
moviePoster : file(image)
movieLogo : file(image)
}

2) To add TV SHOWS WHich contain episodes , seasons genre and all so we have to follow steps which are 

1) api : http://localhost:5000/api/v1/in/super-admin/add-tv-show-episode

		  {
    episodeName: {
      type: String,
      required: true,
    },
    episodeNumber: {
      type: Number,
      required: true,
    },
    season: {
      type: Number,
      required: true,
    },
    duration: {
      type: Number,
      required: true,
    },
    episodePoster: {
      type: file image,
      required: true,
    },
    episodeVideo: {
      type: file video,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    tvShowName: {
      type: String,
      required: true,
    },
    channel: {
      type: String,
      required: true,
    },
  },
  
  2) api : http://localhost:5000/api/v1/in/super-admin/add-seasons-and-episode

{
    tvShowName: {
      type: corresponding to the previous episodes added,
      required: true,
    },
    season: {
      type: String,
      default: 1,
      required: true,
    },
    channel: {
      type: String,
      required: true,
    },
  },
  
  3) api : http://localhost:5000/api/v1/in/super-admin/add-tv-show
  
  
  tvShowName: {
    type: as per previos ,
    required: true,
  },
  channel: {
    type: String,
    required: true,
  },
  tvShowtrailer: {
    type: video file,
    required: true,
  },
  tvShowPoster: {
    type: image file,
    required: true,
  },
  language: {
    type: String,
  },
  ageGroup: {
    type: Number,
    required: true,
  },
  releaseYear: {
    type: String,
    required: true,
  },
  tvGenre: {
    type: [Schema.Types.ObjectId],
    ref: "TvGenre",
  },
  showDescription: {
    type: String,
    required: true,
  },
  seasons: {
    type: [Schema.Types.ObjectId],
    ref: "TvShowSeason",
  },
  
  
  all three steps must be interconnected and they have same seasons episodes and data 


3 ############## other apis ##########

api : http://localhost:5000/api/v1/in/super-admin/add-sport

    sport : string,
    sportPoster : string
}
const sportSchema = new mongoose.Schema({
    sport : {
        type : String,
        required : true
    },
    sportPoster : {
        type : String,
        required : true
    }
    
 api : http://localhost:5000/api/v1/in/super-admin/add-tournament 
 api : http://localhost:5000/api/v1/in/super-admin/add-sport-event
api : http://localhost:5000/api/v1/in/super-admin/add-channel
api : http://localhost:5000/api/v1/in/super-admin/add-tv-genre




###### you can take modal as a reference for other apis data fields and the important one I have explain 

can contribute your thoughts ............ and make it more efficient 



thank you 
