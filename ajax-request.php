<?php
// this will include the database
include_once "./database.php";
// this will add data to the database
if (isset($_POST['create'])) {
	$name = $_POST['guest_name'];
	$stmt = $connection->prepare("INSERT INTO guests (name) VALUES('$name') ");
	$stmt->execute();
}
// this will get data from the database
if (isset($_POST['get'])) {
	$stmt = $connection->prepare("SELECT * FROM guests");
	$stmt->execute();
	$lists = $stmt->fetchAll();
	foreach ($lists as $list) :
	$id = $list["id"];
	$name =  $list["name"];
		echo  '
			<div class="guest guest-'.$id.'">
				<div class="guest-det">
					<i class="fa fa-trash" onclick="deleteBtn('.$id.')"></i>
					<p>'.$name.'</p>
					<i class="fa fa-pen edit-'.$id.'"  onclick="editBtn('.$id.')"></i>
				</div>
				<div class="edit-guest">
					<div style="display:flex;margin-top:20px" align="center">
						<div class="input-field focused">
							<input type="text" id="name'.$id.'" name="name" class="input" placeholder="" value="'.$name.'" required>
							<i class="icon fa "></i>
							<label class="input-label" for="name">Edit Guest Name</label>
						</div>
						<button class="submit-btn" type="button" onclick="subEditBtn('.$id.')">Submit</button>
					</div>
				</div>
			</div>
		';
	endforeach;
}
// this will delete data from the database 
if (isset($_POST['delete'])) {
	$id = $_POST['id'];
	$stmt = $connection->prepare("DELETE FROM guests WHERE id = $id");
	$stmt->execute();
}
// this will edit data from the datebase
if (isset($_POST['edit'])) {
	$name = $_POST['guest_name'];
	$id = $_POST['id'];
	$stmt = $connection->prepare("UPDATE guests SET name = '$name' WHERE id = $id");
	$stmt->execute();
}