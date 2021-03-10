class stone
{
	constructor(x,y,r,r)
	{
		var options={
			isStatic:true			
			}
		this.x=x;
		this.y=y;
		this.r=r;
		this.body=Bodies.circle(x, y, r, r , options);
 		World.add(world, this.body);

	}
	display()
	{
			
			var stonePos=this.body.position;		

			push()
			translate(paperPos.x, paperPos.y);
			rectMode(CENTER)
			//strokeWeight(4);
			fill(128,128,128)
			rect(0,0,this.r, this.r);
			pop()
			
	}

}