extends CharacterBody2D

var vida =2
@onready var player = get_node("/root/WorldGame/Player")

func _physics_process(delta: float) -> void:
	var direction = global_position.direction_to(player.global_position)
	velocity = direction*200
	move_and_slide()
	
func take_damage():
	vida -= 1
	%Slime.play_hurt()
	
	if vida <=0:
		queue_free()
	
