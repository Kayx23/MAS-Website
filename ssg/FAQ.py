from jinja2 import Environment, FileSystemLoader
from yaml import load, FullLoader

# load template
template_env = Environment(loader=FileSystemLoader(searchpath='template'))
template = template_env.get_template('FAQ.html')

# load content
with open('yaml/'+'FAQ.yaml') as yaml_stuff:
    qSet = load(yaml_stuff, Loader=FullLoader)


with open('FAQ.html', 'w') as output_HTML:
    output_HTML.write(
        template.render(
            qSet = qSet
            )
        )
