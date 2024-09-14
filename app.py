import eel
import webbrowser

eel.init('web')

@eel.expose
def share_def(url):
    webbrowser.open(url)

@eel.expose
def calc_bmi(w,h):
    try:
        h /= 100
        bmi = w/(h*h)
        return (format(bmi,'.2f'))
    except:
        return 'Error'


eel.start('index.html',port=8080, host='localhost')
