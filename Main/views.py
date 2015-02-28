from django.shortcuts import render, render_to_response
from django.template import RequestContext

# Create your views here.
def lecture(request, lecture_num):
    url = 'Lecture' + lecture_num + '/lecture'+ lecture_num + '.html'
    return render_to_response(url, RequestContext(request))

def demo(request, demo_num):
    url = 'Demo' + demo_num + '/demo'+ demo_num + '.html'
    return render_to_response(url, RequestContext(request))