import connectDB from "@/config/database";
import Property from "@/models/Property";

// GET/api/properties/:id
export const GET = async (request, { params }) => {
    try {
        await connectDB();

        // params is a Promise and must be unwrapped with await
        const { id } = await params;
        // console.log("params.id: ", id);

        const property = await Property.findById(id);

        if (!property)
            return new Response("Property Not Found.", { status: 404 });

        return new Response(JSON.stringify(property), {
            status: 200,
        });
    } catch (error) {
        console.log(error);
        return new Response("Something went wrong", { status: 500 });
    }
};
