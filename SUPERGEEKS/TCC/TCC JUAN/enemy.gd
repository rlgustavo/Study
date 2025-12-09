extends Node2D

const SPEED = 60
var direction = 1
@onready var left = $RayL 
@onready var right = $RayR
@onready var flip = $AnimatedSprite2D
func _process(delta: float) -> void:
	if right.is_colliding():
		direction = -1
		flip.flip_h = true;
		
	if left.is_colliding():
		direction = 1
		flip.flip_h = false
		
	position.x += direction * SPEED * delta
