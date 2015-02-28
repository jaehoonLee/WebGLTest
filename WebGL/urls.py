from django.conf.urls import patterns, include, url
from django.contrib import admin
from django.views.generic import TemplateView
from Main.views import lecture, demo

urlpatterns = patterns('',
    # Examples:
    url(r'^$', TemplateView.as_view(template_name="index.html")),
    # url(r'^blog/', include('blog.urls')),

    url(r'^admin/', include(admin.site.urls)),
    url(r'lecture/(?P<lecture_num>\d+)/', lecture, name='lecture'),
    url(r'demo/(?P<demo_num>\d+)/', demo, name='demo'),
)
