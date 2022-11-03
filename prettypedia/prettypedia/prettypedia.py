import flask
import wikipedia
import wikipediaapi

from .. import system

pretty_bp = flask.Blueprint('pretty_bp', __name__, template_folder='../')

@pretty_bp.route('/')
def home():
    return flask.render_template('prettypedia/templates/home.html')

@pretty_bp.route('/wiki/<title>')
def article_page(title):
    article = wikipediaapi.Wikipedia('en', extract_format=wikipediaapi.ExtractFormat.HTML).page(title)
    content = article.text

    return flask.render_template('prettypedia/templates/article.html', title=title, content=content)

@pretty_bp.route('/wiki/Special:Search')
def search():
    query = flask.request.args.get('search')
    results = wikipedia.search(query)
    return flask.render_template('prettypedia/templates/results.html', query=query, results=results)
