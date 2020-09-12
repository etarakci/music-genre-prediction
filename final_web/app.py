import numpy as np
from flask import Flask, request, jsonify, render_template, redirect, url_for
import pickle
import pprint 
import json

# import tensorflow as tf
# import keras
# from keras.models import load_model
pp = pprint.PrettyPrinter(indent=4)


app = Flask(__name__)

# lyric_model = pickle.load(open('final_web/static/models/top30_genre_model.pickle', 'rb'))
# loaded_tfidf= pickle.load(open("final_web/static/models/vectorizer.pickle", "rb"))
# genre_dict = pickle.load(open("final_web/static/models/genre_dict.csv", "rb"))
# audio_features_model = pickle.load(open("final_web/static/models/audio_features_model.csv", "rb"))

lyric_model = pickle.load(open('static/models/top30_genre_model.pickle', 'rb'))
loaded_tfidf= pickle.load(open("static/models/vectorizer.pickle", "rb"))
genre_dict = pickle.load(open("static/models/genre_dict.csv", "rb"))
audio_features_model = pickle.load(open("static/models/audio_features_model.csv", "rb"))

import re

def clean_text(text):
    """
    Applies some pre-processing on the given text.

    Steps :
    - Removing HTML tags
    - Removing punctuation
    - Lowering text
    """
    
    # remove HTML tags
    text = re.sub(r'<.*?>', '', text)
    
    # remove the characters [\], ['] and ["]
    text = re.sub(r"\\", "", text)    
    text = re.sub(r"\'", "", text)    
    text = re.sub(r"\"", "", text)    
    
    # convert text to lowercase
    text = text.strip().lower()
    
    # replace punctuation characters with spaces
    filters='!"\'#$%&()*+,-./:;<=>?@[\\]^_`{|}~\t\n'
    translate_dict = dict((c, " ") for c in filters)
    translate_map = str.maketrans(translate_dict)
    text = text.translate(translate_map)

    return text


@app.route("/", methods=['GET','POST'])
def index():
    return render_template("index.html")

@app.route("/summary", methods=['GET','POST'])
def summary():
    return render_template("summary.html")

@app.route("/musicsearch", methods=['GET','POST'])
def musicsearch():
    return render_template("music_search.html")

# @app.route("/prediction", methods=['GET','POST'])
# def prediction():
#     return render_template("prediction.html")

# @app.route("/quiz", methods=['GET','POST'])
# def quiz():
#     return render_template("predict.html")


@app.route("/prediction", methods=['GET','POST'])
def genrepredict():
    # figure out how to disect post response
    if request.method=='POST':
        text = request.form.get("lyric")

        processed_text = clean_text(text)
        X_test = loaded_tfidf.transform([processed_text])

        prediction = lyric_model.predict(X_test)
        prediction_text = genre_dict[prediction[0]]
        print(prediction_text)
        return render_template('prediction.html', predictiontext=prediction_text, hi="Hi")

    return render_template('prediction.html')


@app.route("/audiopredict", methods=['GET','POST'])
def audiopredict():
    if request.method=='POST':
        array = request.form.get("inputArray")

        genre_prediction = audio_features_model(array)

    return render_template('quiz_predict.html')


if __name__ == "__main__":
    app.run(debug=True)




