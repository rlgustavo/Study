extends Area2D


func _physics_process(delta: float) -> void:
	var enemies = get_overlapping_bodies()
	if enemies.size() > 0:
		var target = enemies.front()
		look_at(target.global_position)


func shoot():
	const BULLET = preload("res://Scenes/bullet.tscn")
	var new_bullet = BULLET.instantiate()
	new_bullet.global_position = %Tiro.global_position
	new_bullet.global_rotation = %Tiro.global_rotation
	%Tiro.add_child(new_bullet)
	

func _on_timer_timeout() -> void:
	shoot()
	pass # Replace with function body.
