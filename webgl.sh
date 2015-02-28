case "$1" in 
    start)
	echo "=========================================Starting WebGL Server============================================"
	nohup python manage.py runserver 0.0.0.0:3000 &
	LASTPID=$!
	echo $LASTPID > webGL.pid
    ;;
    stop)
	echo "=========================================Stoping WebGL Server============================================"
	CAMEROPID=$(cat /root/camero/webGL.pid)
	echo $CAMEROPID
	pkill -9 -P $CAMEROPID
    ;;
esac
exit 0
