abstract class SubSystem
{
	public info() 
	{

	}

	public abstract initialize(): void;

	public abstract terminate(): void;

	public abstract update(): void;
}

class Renderer extends SubSystem
{
	public constructor()
	{
		super();
	}

	public initialize(): void
	{
		console.log("hi from renderer");
	}

	public terminate(): void
	{
		console.log("terminating renderer...");
	}


	public update(): void
	{

	}
}

class AssetManager extends SubSystem
{
	public constructor()
	{
		super();
	}

	public initialize(): void
	{
		console.log("hi from assetmanager");
	}

	public terminate(): void
	{
		console.log("terminating asset manager...");
	}

	public update(): void
	{
		// implemention how the assetmanager needs to work		
	}
}

class Engine
{
	private static instance: Engine | null = null;

	public static initialize(): Engine
	{
		if (Engine.instance !== null)
			throw new Error("Engine is already initialized!");
		Engine.instance = new Engine();
		return Engine.instance!;
	}

	public static get(): Engine
	{
		if (Engine.instance === null)
			throw new Error("Engine is not initialized yet!");
		return Engine.instance;
	}
}
