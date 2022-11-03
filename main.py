import prettypedia

app = prettypedia.create_app()
app.run(port=2001, debug=True, use_evalex=False)
