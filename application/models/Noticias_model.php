<?php defined('BASEPATH') OR exit('No direct script access allowed');

class Noticias_model extends CI_Model {

  function __construct()
  {
    parent::__construct();
    $this->load->database();
  }

  public function getUltimasNoticias()
	{
    $query = $this->db->query("select * from notices order by date desc limit 10");
    if ($query->num_rows() > 0)
    {
      return $query->result();
    }
    else
    {
      return false;
    }
	}
}
?>
