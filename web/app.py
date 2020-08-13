import numpy as np
from flask import Flask, request, jsonify, render_template
import pickle
from helper import clean_text
# import tensorflow as tf
# import keras
# from keras.models import load_model



app = Flask(__name__)

lyric_model = pickle.load(open('static/models/top30_genre_model.sav', 'rb'))
# sound_model = load_model('static/models/audio_features_model.h5')


@app.route("/", methods=['GET','POST'])
def index():
    return render_template("index.html")


# @app.route("/lyricpredict", methods=['GET','POST'])
# def predict():

#     int_features = [int(x) for x in request.form.values()]
#     final_features = [np.array(int_features)]
#     prediction = lyric_model.predict(final_features)

#     output = round(prediction[0], 2)

#     return render_template('lyric_predict.html', prediction_text='Sales should be $ {}'.format(output))

@app.route("/genrepredict", methods=['GET','POST'])
def lyricpredict():
    # figure out how to disect post response

    return render_template('genre_predict.html')

@app.route('/genrepredict', methods=['POST'])
def lyricpredict_post():
    text = request.form['text']
    processed_text = clean_text(text)
    print(processed_text)
    output = lyric_model.predict(processed_text)

    return render_template('lyric_predict.html', prediction_text='Genre:{}'.format(output))

# @app.route("/audiopredict", methods=['GET','POST'])
# def audiopredict():
#     # figure out how to disect post response

#     return render_template('audio_predict.html')


if __name__ == "__main__":
    app.run(debug=True)




