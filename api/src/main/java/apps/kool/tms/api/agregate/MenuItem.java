package apps.kool.tms.api.agregate;

import lombok.Data;

import org.bson.types.ObjectId;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.index.Indexed;
import org.springframework.data.mongodb.core.mapping.Document;

import com.fasterxml.jackson.annotation.JsonIgnore;

@Data
@Document
public class MenuItem {
	
	@JsonIgnore
	private @Id  ObjectId id;
	@Indexed(unique=true)
	private String itemName;

	private double costPerThali;
	
	private MenuItemType menuItemType; 
}
