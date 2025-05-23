// First, we must import the schema creator
import createSchema from "part:@sanity/base/schema-creator";

// Then import schema types from any plugins that might expose them
import schemaTypes from "all:part:@sanity/base/schema-type";
import Testimonials from "./testimonials";
import Abouts from "./abouts";
import Works from "./works";
import Skills from "./skills";
import Experiences from "./experiences";
import WorkExperiences from "./workExperiences";
import Contact from "./contact";
import Files from "./files";

// Then we give our schema to the builder and provide the result to Sanity
export default createSchema({
	// We name our schema
	name: "default",
	// Then proceed to concatenate our document type
	// to the ones provided by any plugins that are installed
	types: schemaTypes.concat([
		/* Your types here! */
		Testimonials,
		Abouts,
		Works,
		Skills,
		Experiences,
		WorkExperiences,
		Contact,
		Files,
	]),
});
