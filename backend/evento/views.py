from django.http import JsonResponse
from django.shortcuts import redirect, render

from .models import Evento, Organizador
from evento.serializers import EventoSerializer
from rest_framework.decorators import api_view
from rest_framework.response import Response    
from rest_framework import status


def obtenerEvento(request):

    e = Evento.objects.all()
    datos = {'e': list(e.values('codigo_evento','nombre_del_evento','fecha','ubicacion','organizador'))}
    return JsonResponse(datos)


def registrarEvento(request,id):
    e = Evento.objects.filter(id=id).values('codigo_evento','nombre_del_evento','fecha','ubicacion','organizador')
    datos = {'e': list(e)}
    return JsonResponse(datos)


@api_view(['GET', 'POST'])
def evento_list(request):
    if request.method == 'GET':
        eventos = Evento.objects.all()
        serializer = EventoSerializer(eventos, many=True)
        return Response(serializer.data)

    elif request.method == 'POST':
        serializer = EventoSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)





@api_view(['GET', 'PUT', 'DELETE'])
def evento_detail(request, pk):
    try:
        evento = Evento.objects.get(pk=pk)
    except Evento.DoesNotExist:
        return Response(status=status.HTTP_404_NOT_FOUND)

    if request.method == 'GET':
        serializer = EventoSerializer(evento)
        return Response(serializer.data)

    elif request.method == 'PUT':
        serializer = EventoSerializer(evento, data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    elif request.method == 'DELETE':
        evento.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)





def insertarEvento(request):
    org = Organizador.objects.all()
    nombre = request.session.get('nomUsuario', '')
    if request.method == "POST":
        codigo_evento = request.POST['txt1']
        nombre_del_evento = request.POST['txt2']
        fecha = request.POST['txt3']
        ubicacion = request.POST['txt4']
        organizador_id = request.POST['cbo1']
        e = Evento(codigo_evento=codigo_evento, nombre_del_evento=nombre_del_evento, fecha=fecha, ubicacion=ubicacion, organizador_id=organizador_id)
        e.save()
        org = Organizador.objects.all()

        datos = {'mensaje': "Evento registrado correctamente", 'organizadores': org, 'nomUsuario': nombre}
        return render(request, 'form_reg.html', datos)
    else:
        datos = {'organizadores': org}
        return render(request, 'form_reg.html', datos)

def editarEventos(request, id):
    nombre = request.session.get('nomUsuario', '')
    id = int(id)
    evento = Evento.objects.get(codigo_evento=id)
    org = Organizador.objects.all()
    datos = {'evento': evento, 'organizadores': org, 'nomUsuario': nombre}
    return render(request, 'form_act.html', datos)

def actualizarEvento(request):
    if request.method == "POST":
        id = request.POST['id']
        codigo_evento = request.POST['txt1']
        nombre_del_evento = request.POST['txt2']
        fecha = request.POST['txt3']
        ubicacion = request.POST['txt4']
        organizador_id = request.POST['cbo1']

        evento = Evento.objects.get(id=id)
        evento.codigo_evento = codigo_evento
        evento.nombre_del_evento = nombre_del_evento
        evento.fecha = fecha
        evento.ubicacion = ubicacion
        evento.organizador_id = organizador_id
        evento.save()
        nombre = request.session.get('nomUsuario', '')


        return render(request, 'listado.html', {
            'eventos': Evento.objects.all(),
            'mensaje': "Evento modificado correctamente"
            ,'nomUsuario': nombre
        })
    
    return redirect('listado')


def form_reg(request):

    nombre = request.session.get('nomUsuario', '')
    org = Organizador.objects.all()
    datos = {'nomUsuario': nombre , 'organizadores': org}
    return render(request, 'form_reg.html',datos)

def eliminarEvento(request, id):
    try:
        id = int(id)
        evento = Evento.objects.get(codigo_evento=id)
        evento.delete()
        return redirect('eliminarEvento',id=evento) 
    except Evento.DoesNotExist:
        return redirect('listado')  



# Create your views here.
