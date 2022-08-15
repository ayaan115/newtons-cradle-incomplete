class rope{
	constructor(body1,body2, offsetX)
	{
		var options={
			bodyA:body1,
			bodyB:body2
		}

		this.rope=Constraint.create(options)
		World.add(world,this.rope)

		this.offsetX = offsetX
	}

	display()
	{
		var pointA=this.rope.bodyA.position;
		var pointB=this.rope.bodyB.position;

		strokeWeight(2);

		//WRITE THE CORRECT CODE TO RENDER A LINE BETWEEN THE TWO BODIES
		line(con.pointA.x, con.pointA.y, bob1.position.x, bob1.position.y);

		line(con.pointA.x, con.pointA.y, bob2.position.x, bob2.position.y);

		line(con.pointA.x, con.pointA.y, bob3.position.x, bob3.position.y);

		line(con.pointA.x, con.pointA.y, bob4.position.x, bob4.position.y);
		
		line(con.pointA.x, con.pointA.y, bob5.position.x, bob5.position.y);
	}

}