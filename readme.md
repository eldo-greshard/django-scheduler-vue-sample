# django-scheduler sample project

in this sample project, i already used fullcalendar vue with default 
- **initialView** : listWeek
- **plugins** : dayGridPlugin, interactionPlugin, listPlugin.

i fork the django-scheduler repo and create abstract calendar and event models so you can extend the model and add your custom field with it.

hope it helps you,

## Requirements

 - yarn
 - virtualenv / pipenv


## How to run it

## Run django server

```python
pip install -r requirements.txt
python manage.py migrate
python manage.py createsuperuser # superuser to create calendar from django admin page
python manage.py runserver 0.0.0.0:8000
```

## Run yarn serve
```bash
cd frontend
yarn install
yarn run serve
```

django will run on port **8000** and frontend will run on port **8080**
```
http://localhost:8000
http://localhost:8080
```

## How it works

basicly django-scheduler will provide a list of events object when you access **http://localhost:8000/schedule/api/occurrences?start=2020-01-01&end=2020-12-31**. 

on the other side our vue app will fetch the data after the button pressed and trigger the **fetchPhrases** method, and store the response body data to **calendarOptions.events**.

i followed this repo to integrate the vue and django together
[john franey - Blog repo](https://github.com/johnfraney/blog-examples/tree/master/integrate-django-vue)
