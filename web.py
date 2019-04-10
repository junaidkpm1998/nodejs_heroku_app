from flask import Flask,render_template
app=Flask(__name__) #special type of varible in python=call cheyyuna filei thanee alle en nokan
@app.route("/")
def greeting():
	return render_template('index.html')
if(__name__=="__main__"):
	app.run(host='127.0.0.1',debug=True)
	
