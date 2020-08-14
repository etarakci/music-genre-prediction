import numpy as np
from flask import Flask, request, jsonify, render_template, redirect, url_for
import pickle
from helper import clean_text
from helper import transform_data
import pprint 
import json

# import tensorflow as tf
# import keras
# from keras.models import load_model
pp = pprint.PrettyPrinter(indent=4)


app = Flask(__name__)

lyric_model = pickle.load(open('static/models/top30_genre_model.pickle', 'rb'))
loaded_tfidf= pickle.load(open("static/models/vectorizer.pickle", "rb"))
genre_dict = pickle.load(open("static/models/genre_dict.csv", "rb"))

# sound_model = load_model('static/models/audio_features_model.h5')


@app.route("/", methods=['GET','POST'])
def index():
    return render_template("index.html")

@app.route("/genrepredict", methods=['GET','POST'])
def genrepredict():
    # figure out how to disect post response
    if request.method=='POST':
        text = request.form.get("lyric")
        # text = [k for k in text.keys()]
        # text = json.loads(text[0])
        # text = text['key']

        processed_text = clean_text(text)
        X_test = loaded_tfidf.transform([processed_text])

        prediction = lyric_model.predict(X_test)
        prediction_text = genre_dict[prediction[0]]
        print(prediction_text)
        return render_template('genre_predict.html', predictiontext=prediction_text, hi="Hi")

    return render_template('genre_predict.html')

# @app.route('/genrepredict', methods=['POST'])
# def genrepredict_post():
#     text = request.form.to_dict()
#     text = [k for k in text.keys()]
#     text = json.loads(text[0])
#     text = text['key']

#     processed_text = clean_text(text)
#     X_test = loaded_tfidf.transform([processed_text])

#     prediction = lyric_model.predict(X_test)
#     prediction_text = genre_dict[prediction[0]]

#     print(prediction_text)
#     return redirect(url_for('genrepredict',prediction_text = prediction_text))
#     # return render_template('genre_predict.html', prediction_text=prediction_text)

# @app.route("/audiopredict", methods=['GET','POST'])
# def audiopredict():
#     # figure out how to disect post response

#     return render_template('audio_predict.html')


if __name__ == "__main__":
    app.run(debug=True)




