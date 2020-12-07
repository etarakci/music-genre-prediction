# Song Genre Prediction Using NLP and Audio Features
Check out the fully deployed project on our [website.](https://music-genre-prediction.herokuapp.com/)
You can also find a more thorough walk-through of our process on our [summary page.](https://music-genre-prediction.herokuapp.com/summary)

## Team Members
* Jasmeet Bajwa: [Github](https://github.com/bajwaj "Github") | [LinkedIn](https://www.linkedin.com/in/jasmeetbajwa/ "LinkedIn")
* Erendiz Tarakci: [Github](https://github.com/etarakci "Github") | [LinkedIn](https://www.linkedin.com/in/erendiz/ "LinkedIn")
* Kay Royo: [Github](https://github.com/kayannr "Github") | [LinkedIn](https://www.linkedin.com/in/kayr/ "LinkedIn")
* Niama Bagaga: [Github](https://github.com/Niama1 "Github") |[LinkedIn](https://www.linkedin.com/in/niama-bagaga-ab647613b/ "LinkedIn")

## About the Project
Our team was curious about the relationship between song genre, song lyrics, and sound features. We aimed to use various machine learning models to predict song genre using lyrics and sound data. The datasets used for this project were obtained from www.spotify.com and www.azlyrics.com . The initial dataset gathered from Spotify api contains 114,832 songs from 3,132 artists and 111 song genres while the AzLyrics dataset contains 147,872 songs from 6,464 artists and 111 song genres.

## Collecting and Cleaning the Data
We had two main sources of data for this project: A lyric dataset from AZ Lyrics and a genre and audio dataset from the Spotify API. Below you can explore how each dataset was cleaned and eventually merged for the NLP model.
* [AZ Lyrics dataset](/jupyter_notebooks/lyric_data_new.ipynb)
* [Spotify dataset](/jupyter_notebooks/Spotify%20API.ipynb)
* [Merging the datasets](/jupyter_notebooks/merge_data_new.ipynb)

## Machine Learning Algorithm Training and Testing
Below you can explore the training of our two models for NLP and audio feature ML:
* [The Natural Language Processing model to predict the genre from the lyrics.](/jupyter_notebooks/lyrics_nlp_sklearn.ipynb) Accuracy: 35%
* [The Machine Learning KNN model to predict genre from the audio features.](/jupyter_notebooks/Final_Project_ML_JB.ipynb) Accuracy: 55%

## User Interface
You can test the NLP model yourself by pasting lyrics into the textbox on our [prediction page.](https://music-genre-prediction.herokuapp.com/prediction)
We also have a quiz under development to predict genre based on audio features that you can preview on our [quiz page.](https://music-genre-prediction.herokuapp.com/audiopredict)

