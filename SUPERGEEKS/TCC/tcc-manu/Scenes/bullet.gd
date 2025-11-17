extends Area2D

var distancia = 0 


func _physics_process(delta: float) -> void:
	var direction= Vector2.RIGHT.rotated(rotation)
	position+=direction*1000*delta
	distancia += 1000 *delta
	var RANGE = 1200  
	if distancia> RANGE : 
		queue_free()

func _on_body_entered(body: Node2D) -> void:
	queue_free()
	if body.has_method("take_damage"):
		body.take_damage()
		
	pass # Replace with function body.
	
	
