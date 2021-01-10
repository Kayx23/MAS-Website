from jinja2 import Environment, FileSystemLoader
from yaml import load, FullLoader

# load template
template_env = Environment(loader=FileSystemLoader(searchpath='template'))
template = template_env.get_template('meet-the-team.html')

# load content
with open('yaml/'+'meet-the-team.yaml') as yaml_stuff:
    team = load(yaml_stuff, Loader=FullLoader)


with open('meet-the-team.html', 'w') as output_HTML:
    output_HTML.write(
        template.render(
            people = team
            )
        )
