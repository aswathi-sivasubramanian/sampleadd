import "./my-sass.scss";
function Doctor() {
  return (
    <div className="wrapper">
      <Card
        img="https://t3.ftcdn.net/jpg/02/95/51/80/360_F_295518052_aO5d9CqRhPnjlNDTRDjKLZHNftqfsxzI.jpg"
        name="Dr.Alex"
        description="Neurologist"
      />

      <Card
        img="https://t3.ftcdn.net/jpg/03/13/77/82/240_F_313778250_Y0o5can6MA490Nt7G6p03Zfu5fKmWCIv.jpg"
        name="Dr.Jasmine"
        description="Ophthalmologist"
      />

      <Card
        img="https://t4.ftcdn.net/jpg/03/20/74/45/240_F_320744517_TaGkT7aRlqqWdfGUuzRKDABtFEoN5CiO.jpg"
        name="Dr.Pallavi"
        description="Dermatologist"
      />
      <Card
        img="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRwqtCSynDQRoljeLFbQ5qb4z84QHY6Ijfm1w&usqp=CAU"
        name="Dr.Harry Potter"
        description="Cardiologist"
      />
      <Card
        img="https://images.theconversation.com/files/304957/original/file-20191203-66986-im7o5.jpg?ixlib=rb-1.1.0&q=45&auto=format&w=1200&h=1200.0&fit=crop
        "
        name="Dr.Emily"
        description="Gastroenterologist"
      />
      <Card
        img=" https://media.istockphoto.com/photos/male-black-doctor-with-protective-face-mask-working-at-the-clinic-and-picture-id1288131990?k=20&m=1288131990&s=612x612&w=0&h=1eqt76XLE4-ue9ZVM2SaJ7DkX5x03CnBfyxQKF_dXDU="
        name="Dr.Wilson"
        description="Allergists/Immunologist"
      />
    </div>
  );
}

function Card(props) {
  return (
    <div className="card">
      <div className="card__body">
        <img src={props.img} class="card__image" />
        <h2 className="card__title">{props.name}</h2>
        <p className="card__description">{props.description}</p>
      </div>
      <button className="card__btn">Consulting Details</button>
    </div>
  );
}

export default Doctor;
